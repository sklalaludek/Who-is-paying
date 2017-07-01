(function GetApp(){
    let applicants = [];

    function init() {
        addApplicants();
        getRandomUser();
    };

    function showList(){
        let parent = document.querySelector('.applicant_list_wrapper');
        let template = ' ';

        for (let i = 0; i < applicants.length; i++) {
            template += '<span class="name-tag" data-id=" '+ i +' ">' + applicants[i] + '</span>';
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
            console.log(applicants);
        };

        addBtn.addEventListener('click', function(){
            const input = document.getElementById('applicant_value');
            generateList(input);
        });

    };

    function checkValid(value){
        if (applicants.indexOf(value) < 0 && value != ' '){
                return true;
        }
        return false;
    };

    function toDelete(){
        let item = document.querySelectorAll('.name-tag');

        function removeIt(element){
            let attr = parseInt(element.getAttribute('data-id'));

            applicants.splice(attr, 1);
            // generate list again
            showList();
            console.log(applicants);
        };

        item.forEach(item => item.addEventListener('click', function(e){
                removeIt(this);
        }));
    };

    function getRandomUser(){
        const resultBtn = document.getElementById('show_results');

        function showLooser(){
            let resultsContainer = document.querySelector('.results_container');
            let applicantsContainer = document.querySelector('.applicant_container'),

            //  applicantsContainer.className += 'hidden';
            //  resultsContainer.className = 'results_container';
        };

        resultBtn.addEventListener('click', function(e){
            if (applicants.length > 1) {
                showLooser();
            }

        });
    };

    init();
})();
