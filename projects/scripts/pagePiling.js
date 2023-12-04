let deleteLog = false;

$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#basics',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: {
            'textColor': '#f0f2f0',
            'bulletsColor': '#ccc000',
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page4']
        }
    });
});