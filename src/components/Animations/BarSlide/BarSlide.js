// Demo/Inspo: http://jsfiddle.net/eFFKU/12/
import $ from 'jquery';
const BarSlide = () => {

    (function(Timeline, $, undefined) {

        var timelinePosition = 0, 
            timelineContainerWidth = $('#container').width(), 
            isScrollActive = false;

        var $controls = $('#controls li'),
            $timeline = $('#timeline');

        Timeline.init = function() {
            $controls.on('mousedown', startScrolling).on('mouseup', stropScrolling);
        }

        var liWidth = $('#timeline ul li').outerWidth(true);
        var liTotal = $('#timeline ul li').index()-9;
        // need to descry first seen li's from calculation
        var MaxRange = (liTotal * liWidth) * -1;

        $('.next').on('click', () => {
            var current = parseInt($('#timeline').css('right'));
            if( current <= -1 ) {
                $timeline.stop(false, true).animate({ 'right': '+=' + liWidth + 'px' }, 1000);
            }
        });

        $('.prev').on('click', () => {
            var current = parseInt($('#timeline').css('right'));
            if( current <= 0 && current > MaxRange ) {
                $timeline.stop(false, true).animate({ 'right': '-=' + liWidth + 'px' }, 1000);
            }
        });

        const startScrolling = () => {
            var timelineLength = $timeline.width();

            isScrollActive = true;

            if($(this).hasClass('left')) {
                scrollLeft(timelineLength);
            } else {
                scrollRight(timelineLength);
            }
        }

        const scrollLeft = (timelineLength) => {
            if(isScrollActive) {
                $timeline.animate({
                    right: '-=10px'
                }, 10, function() {
                    timelinePosition = parseInt($timeline.css('right'), 10);   // Record timeline position

                    if(Math.abs(timelinePosition) <= (timelineLength - timelineContainerWidth)) { scrollLeft(timelineLength) }
                });
            }
            console.log(timelinePosition);
        }

        const scrollRight = (timelineLength) => {
            if(isScrollActive) {
                $timeline.animate({
                    
                })
            }
        }
    })

    return (
        <div className="container">
            <div id="timeline">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <ul id="controls">
                <li className="left">Move left</li>
                <li className="right">Move right</li>
            </ul>
            
            <a className="next">next</a>
            <a className="prev">previous</a>
        </div>
    )
}

export default BarSlide;