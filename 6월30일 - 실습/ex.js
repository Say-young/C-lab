/* 아래로 내려가는 애니메이션 적용 후 요소를 display:none 하고 싶은데 적용이 안 돼요*/

document.getElementById('arrow').addEventListener('click', function () {
    document.getElementsByClassName('wrapper')[0].classList.remove('showanimation')
    document.getElementsByClassName('wrapper')[0].classList.add('goneanimation')

    //시간차로 hidden을 먹여보세요
    setTimeout(function () {
        document.getElementsByClassName('wrapper')[0].classList.add('hidden')
    }, 800);
})




/* 동적으로 생성한 요소들에 addEventlistner를 for문을 사용해 붙였는데 자꾸 마지막 요소에만 붙어요 */

//scrollContents에 해당하는 태그 모두 불러오기
var el = document.getElementsByClassName('scrollContents');
//forEach 반복문을 사용해 유사배열의 각각의 요소에 data 할당
//참고 : https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2
Array.prototype.forEach.call(el, function (item, index) {
    item.addEventListener('click', function () {
        var data = Object.assign({}, projects[index]);
        alert(JSON.stringify(data));
    })
});