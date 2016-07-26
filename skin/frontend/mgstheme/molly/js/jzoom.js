(function($) {
    'use strict';
    $.fn.jzoom = function(options) {
        return this.each(function() {
            // Set up default options
            var defaultOptions = {
                width: 400,
                height: 400,
                position: 'right',
                offsetX: 20,
                offsetY: 0,
                opacity: 0.6,
                bgColor: '#fff',
                loading: 'Loading...'
            };
            // Custom options
            options = $.extend({}, defaultOptions, options);

            // Get container to add position and make the image having same width and height with container
            var $jzoom = $(this);
            var jzoomPosition = $jzoom.css('position');

            if (jzoomPosition === 'static') {
                $jzoom.css('position', 'relative');
            }
            $jzoom.find('img').css({
                width: $jzoom.width() + 'px',
                height: $jzoom.height() + 'px'
            });

            // Get lens div and add css
            var $jzoomLens = $('<div></div>');
            $jzoomLens.css({
                position: 'absolute',
                zIndex: '990',
                opacity: options.opacity,
                cursor: 'move',
                border: '1px solid #ccc',
                backgroundColor: options.bgColor
            });

            // Get zooming window and add css
            var $jzoomDiv = $('<div></div>');
            var jzoomDivLeft, jzoomDivTop;

            switch (options.position) {
                case 'top':
                    jzoomDivLeft = 0;
                    jzoomDivTop = -options.height - options.offsetY;
                    break;
                case 'right':
                    jzoomDivLeft = $jzoom.width() + options.offsetX;
                    jzoomDivTop = 0;
                    break;
                case 'bottom':
                    jzoomDivLeft = 0;
                    jzoomDivTop = $jzoom.height() + options.offsetY;
                    break;
                case 'left':
                    jzoomDivLeft = -options.width - options.offsetX;
                    jzoomDivTop = 0;
                    break;
            }

            $jzoomDiv.css({
                left: jzoomDivLeft + 'px',
                top: jzoomDivTop + 'px',
                width: options.width + 'px',
                height: options.height + 'px',
                position: 'absolute',
                zIndex: '999',
                overflow: 'hidden',
                border: '1px solid #ccc',
                fontSize: '20px',
                textAlign: 'center',
                lineHeight: options.height + 'px'
            });

            // Create <img> of big image and add loading text
            var $zoomImg = createZoomImg(options.suffixName, options.imgType);
            $jzoomDiv.append($zoomImg).append(options.loading);

            // Variables
            var flag = 0,
                JzoomOffset = $jzoom.offset(),
                CriticalX, CriticalY,
                finalX, finalY,
                DistProportionX, DistProportionY;

            // Mouse events
            $jzoom.mouseenter(function() {
                    $jzoomLens.show();
                    $jzoomDiv.show();

                    if (flag === 0) {
                        firstEnter();
                        flag++;
                    }
                })
                .mousemove(function(e) {
                    // Calculate coordinates of lens div
                    finalX = calcDistance(e.pageX, JzoomOffset.left, $jzoomLens.width(), CriticalX);
                    finalY = calcDistance(e.pageY, JzoomOffset.top, $jzoomLens.height(), CriticalY);

                    $jzoomLens.css({
                        left: finalX + 'px',
                        top: finalY + 'px'
                    });

                    // Calculate offsets of big images
                    $zoomImg.css({
                        left: -finalX * DistProportionX + 'px',
                        top: -finalY * DistProportionY + 'px'
                    });
                })
                .mouseleave(function() {
                    $jzoomLens.hide();
                    $jzoomDiv.hide();
                });

            function createZoomImg(suffixName, imgType) {
                var imgSrc = $jzoom.find('img').attr('src');

                suffixName = suffixName || '_big';

                var point = imgSrc.lastIndexOf('.');

                imgType = imgType || imgSrc.substring(point + 1);

                var newImgSrc = imgSrc.substring(0, point) + suffixName + '.' + imgType;
                var newImg = $('<img>').attr('src', newImgSrc).css('position', 'absolute');

                return newImg;
            }

            function firstEnter() {
                $jzoom.append($jzoomLens).append($jzoomDiv);

                // Calculate proportions of lens div
                var VolProportionX = $zoomImg.width() / $jzoom.width();
                var VolProportionY = $zoomImg.height() / $jzoom.height();

                $jzoomLens.css({
                    width: $jzoomDiv.width() / VolProportionX + 'px',
                    height: $jzoomDiv.height() / VolProportionY + 'px'
                });

                // Calculate critical coordinates of lens div
                CriticalX = $jzoom.width() - $jzoomLens.outerWidth();
                CriticalY = $jzoom.height() - $jzoomLens.outerHeight();

                // Calculate proportions of offsets of big image
                DistProportionX = ($zoomImg.width() - $jzoomDiv.width()) / CriticalX;
                DistProportionY = ($zoomImg.height() - $jzoomDiv.height()) / CriticalY;
            }

            function calcDistance(pageD, offsetD, lensW, criticalD) {
                var finalD,
                    distance = pageD - offsetD - lensW / 2;

                if (distance >= 0 && distance <= criticalD) {
                    finalD = distance;
                } else if (distance < 0) {
                    finalD = 0;
                } else {
                    finalD = criticalD;
                }

                return finalD;
            }

            return this;
        });
    };
})(jQuery);
$('.jzoom').jzoom({bgColor: "#222"});
