(function($, w, undefined) {
    var client = $.algolia.Client('3JVPAEDRMT', 'd3d501be8792a04fb743c5cbee8d289f'),
        index = client.initIndex('getstarted_actors'),
        GUI = new GUIController($('#main-content'));

    $('#search').on('keyup', function() {
        var searchTerm = $(this).val();
        if(searchTerm.length === 0) {
            GUI.clear();
        } else {
            index.search(searchTerm, function searchDone(err, content) {
                console.log(content);
                GUI.clear();
                var hits = content.hits;
                for(var i in hits) {
                    GUI.appendRes(hits[i]);
                }
            });
        }
    });

}(jQuery, window));