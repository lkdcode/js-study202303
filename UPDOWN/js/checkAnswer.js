export {
    caseUp,
    caseDown,
    correctAnswer
};

function caseUp($target) {

    // 1. #begin의 숫자값이 클릭값 +1 로 변경
    document.getElementById('begin').textContent = +$target.dataset.iconNumber + 1;



    // 2. #down .selected 제거, #up 에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');


    // 3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $target;

    while ($delTarget) {
        const $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;

    }
}

function caseDown($target) {
    // 1. #end의 숫자값이 클릭값 - 1 로 변경
    document.getElementById('end').textContent = +$target.dataset.iconNumber - 1;
    // 2. #up .selected 제거, #down 에 추가
    document.getElementById('down').classList.add('selected');
    document.getElementById('up').classList.remove('selected');

    // 3. 자기 자신 아이콘 포함 다음 형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $target;

    while ($delTarget) {
        const $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
}


function correctAnswer($crrectIcon) {
    // 1. finish 아이디 박스에 class 'show' 부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');


    // 2. #numbers 클릭 이벤트 해체
    document.getElementById('numbers').onclick = null;

    // 3. 클릭한 아이콘에 id 'move' 부여
    $crrectIcon.setAttribute('id', 'move');
}