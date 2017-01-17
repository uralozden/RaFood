window.addEventListener('load',() => {

    var ApiUrl ="http://localhost/Rafood/api/api.php/food_info/"; /* YOUR API URL */
    var app = new Vue({
    el: '#app',
    data: {
        query :"",
        result: false
    },
    methods: {
        GetFood:function(){
            rndNumber = Math.floor((Math.random() * 400) + 20);
            fetch(ApiUrl+rndNumber)
            .then(result => result.json())
            .then(result => {
                this.$set(this,'result',result)
            })
        }
    }
    });
})