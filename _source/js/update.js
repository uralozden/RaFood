window.addEventListener('load',() => {

    var ApiUrl =""; /* YOUR API URL */
    var app = new Vue({
    el: '#app',
    data: {
        query :"",
        result: {}
    },
    methods: {
        search:function(){
            fetch(ApiUrl+this.query)
            .then(result => result.json())
            .then(result => {
                this.$set(this,'result',result)
            })
        }
    }
    });
})