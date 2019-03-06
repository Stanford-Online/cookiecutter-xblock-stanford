/* eslint-disable no-unused-vars */
/**
 * Initialize the {{cookiecutter.class_name}} student view
 * @param {Object} runtime - The XBlock JS Runtime
 * @param {Object} element - The containing DOM element for this instance of the XBlock
 * @returns {undefined} nothing
 */
function {{cookiecutter.class_name}}(runtime, element) {
    /* eslint-enable no-unused-vars */
    'use strict';

    var $ = window.jQuery;

    /**
     * Update the count UI
     * @param {Object} result - the AJAX response from the server-side handler
     * @returns {undefined} nothing
     */
    function updateCount(result) {
        // TODO: Replace this with your own UI logic
        $('.count', element).text(result.count);
    }

    // TODO: Replace this with your own handler url
    var handlerUrl = runtime.handlerUrl(element, 'increment_count');

    /* eslint-disable no-unused-vars */
    $('p', element).click(function (eventObject) {
        // TODO: Replace this with your own click handler
        /* eslint-enable no-unused-vars */
        $.ajax({
            type: 'POST',
            url: handlerUrl,
            data: JSON.stringify({
                // TODO: Replace this with your own data payload
                'hello': 'world',
            }),
            // TODO: Replace this with your own callback
            success: updateCount,
        });
    });

    $(function () {
        // TODO: Something on pageload?
    });
}
