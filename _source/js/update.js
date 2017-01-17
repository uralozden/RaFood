window.addEventListener('load',() => {

    var ApiUrl ="http://localhost/Rafood/api/api.php/food_info/"; /* YOUR API URL */
    var app = new Vue({
    el: '#app',
    ready:function(){
        fetch(ApiUrl+"53")
        .then(result => result.json())
        .then(result => {
            this.$set(this,'result',result)
        })
    }
    });
})