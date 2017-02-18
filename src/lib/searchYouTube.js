/*
 * options: { query: (string), max: (number), key: (string) }
 */

var searchYouTube = (options, callback) => {
  if (options) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        q: options.query,
        maxResults: options.max,
        type: 'video',
        key: options.key
      },
      type: 'GET',
      contentType: 'application/json',
      success: data => { callback(data.items); },
    });
  }
};

window.searchYouTube = searchYouTube;
