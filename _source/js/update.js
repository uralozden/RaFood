window.addEventListener('load',() => {

    // var ApiUrl ="http://playship.net/rafood/api.php/food_info/"; /* YOUR API URL */
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
            this.$http.get(ApiUrl+rndNumber)
            .then(function(result){
                result.json;
                this.result = JSON.parse(result.body);
            });

 
        }
    }, 
    created(){
        rndNumber = Math.floor((Math.random() * 400) + 20);
        this.$http.get(ApiUrl+rndNumber)
        .then(function(result){
            result.json;
            this.result = JSON.parse(result.body);
        });

        
    }
    });
})