/* eslint-disable no-unused-vars */
/**
 * Control client-side logic for the student view
 */
function {{cookiecutter.class_name}}(runtime, element) {
    /**
     * Initialize the {{cookiecutter.class_name}} student view
     * @param {Object} runtime - The XBlock JS Runtime
     * @param {Object} element - The containing DOM element for this instance of the XBlock
     * @returns {undefined} nothing
     */
    /* eslint-enable no-unused-vars */
    'use strict';

    var $ = window.jQuery;

    function updateCount(result) {
        $('.count', element).text(result.count);
    }

    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    $('p', element).click(function (eventObject) {
        $.ajax({
            type: 'POST',
            url: handlerUrl,
            data: JSON.stringify({
                'hello': 'world',
            }),
            success: updateCount,
        });
    });

    $(function () {
        // TODO: Something on pageload?
    });
}
