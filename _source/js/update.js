window.addEventListener('load',() => {

    var ApiUrl ="http://playship.net/rafood/api.php/food_info/"; /* YOUR API URL */
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
        },
        GoCart:function(data){
            window.open('https://www.yemeksepeti.com/istanbul/arama#ors:true|st:'+data,'_blank');
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
 
 //$(body).removeClass("load");
})