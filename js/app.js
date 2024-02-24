// by Just. Liu
// v0.0.1

const app = Vue.createApp({	
  data() {
    return {

    }
  },
  mounted() {
		axios.get('data/data.json').then(response => {
			this.items = response.data;
		}).catch(error => {
			console.log(error);
		});
	},
	computed: {
		
	},
  methods: {
		
		// 回到顶部
		
  }
})

app.mount('#app')
