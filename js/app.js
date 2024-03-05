// by Just. Liu
// v0.0.1


const app = Vue.createApp({	
  data() {
    return {
			 items: [],
			 selectedType: 0,
			 show: false,
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
		// filteredItems() {
		// 	return this.selectedType === '0'
		// 		? this.items
		// 		: this.items.filter(item => item.classid === parseInt(this.selectedType))
		// },
		filteredItems() {
			let filtered = this.selectedType === ''
				? this.items
				: this.items.filter(item => item.classid === parseInt(this.selectedType));
			// 反序排列
			return filtered.slice().reverse();
		},
	},
  methods: {
		// 显示弹层
		showPopup(item){
			this.popupItem = item;
			this.show = true;
		},
		// 隐藏弹层
		hidePopup(){
			this.popupItem = null;
			this.show = false;
		},
		// 回到顶部
  }
})

app.mount('#app')
