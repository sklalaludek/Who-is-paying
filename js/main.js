(function GetApp() {
    let applicants = [];

    function init() {
        addApplicants();
        getRandomUser();
        runAgain();
        startOver();
    };

    function showList() {
        let parent = document.querySelector('.applicant_list_wrapper');
        let template = ' ';

        for (let i = 0; i < applicants.length; i++) {
            template += `<span class="name-tag" data-id="${i}">${applicants[i]}</span>`;
        }

        parent.innerHTML = ' ';
        parent.insertAdjacentHTML('afterbegin', template);
        toDelete();
    };

    function addApplicants() {
        const addBtn = document.getElementById('add_applicant');

        function generateList(input){
            let value = input.value;

            if (checkValid(value)) {
                applicants.push(value.toLowerCase());
                // // to clear the input
                input.value = ' ';
                showList();
                // reset form
                input.value = input.defaultValue;
            } else {
                alert('WRONG!');
            }
        };

        addBtn.addEventListener('click', () => {
            const input = document.getElementById('applicant_value');
            generateList(input);
        });

    };

    function checkValid(value) {
        return applicants.indexOf(value) < 0 && value != ' ' ? true : false;
    };

    function toDelete() {
        let item = document.querySelectorAll('.name-tag');

        function removeIt(element){
            let attr = parseInt(element.getAttribute('data-id'));

            applicants.splice(attr, 1);
            // generate list again
            showList();
        };

        item.forEach(item => item.addEventListener('click', () => removeIt(this)) );
    };

    function getRandomUser() {
        const resultBtn = document.getElementById('show_results');

        function showLooser() {
            let resultsContainer = document.querySelector('.results_container');
            let applicantsContainer = document.querySelector('.applicant_container');

             applicantsContainer.className += ' hidden';
             resultsContainer.className = 'results_container';

             showRandomUser();
        };

        resultBtn.addEventListener('click', () => {
            if (applicants.length > 0) {
                showLooser();
            }
        });
    };

    function showRandomUser() {
        const resultContainer = document.querySelector('.result');
        let randomUser = applicants[Math.floor(Math.random() * applicants.length)];

        /*to clear HTML*/
        resultContainer.innerHTML = ' ';
        let randomName = `<h3>${randomUser}</h3>`;

        resultContainer.insertAdjacentHTML('afterbegin', randomName);
    };

    function runAgain() {
        const runAgainBtn = document.querySelector('.run_again');

        runAgainBtn.addEventListener('click', () => showRandomUser());
    };

    function startOver() {
        const startAgainBtn = document.querySelector('.start_again');

        startAgainBtn.addEventListener('click', () => {
            let resultsContainer = document.querySelector('.results_container');
            let applicantsContainer = document.querySelector('.applicant_container');
            let applicantsWrapper = document.querySelector('.applicant_list_wrapper');

            applicantsContainer.className = ' applicant_container';
            resultsContainer.className = 'results_container hidden';
            applicantsWrapper.innerHTML = ' ';

            applicants = [];
        });
    };

    init();
})();
