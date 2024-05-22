$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');
  const $captionText = $('.caption');

  // 비디오 리스트를 클릭(선택)했을 때
  $selectVideo.on('click', function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLink = $(this).data('link'); /* data-link */
    console.log(videoLink);
    // videoLink = videoLink + '?autoplay=1'
    videoLink += '?autoplay=1';

    // 선택한 비디오의 텍스트를 변수에 저장
    const videoText = $(this).text();

    // video의 src 값으로 비디오 링크를 세팅
    $video.attr('src', videoLink);

    // .caption에 세팅
    $('.caption').text(videoText);
    // $captionText.text(videoText);
    // $dim을 보이게
    $dim.fadeIn();

    // $videoWrap을 보이게
    $videoWrap.addClass('active');
  });

  // 닫기버튼을 클릭했을 때
  $btnClose.on('click', function () {
    // $dim을 안 보이게
    $dim.fadeOut();
    // $videoWrap을 안 보이게
    $videoWrap.removeClass('active');

    // $video이 src 값을 없애자
    $video.attr('src', '');
  });
});
