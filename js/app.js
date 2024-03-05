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
		showPopup(item) {
			this.popupItem = item;
			this.show = true;
		},
		// 隐藏弹层
		hidePopup() {
			this.popupItem = null;
			this.show = false;
		},
		// 回到顶部操作
		// 获取滚动条到顶部的距离
		// window.addEventListener('scroll',function(){
		// 	const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动高度
		// 	// 滚动高度大于200显示按钮
		// 	document.querySelector('.top-btn').style.display = scrollHeight > 200 ? 'block' : 'none';
		// })
		// 匀速返回顶部
		backTop(){
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
})

app.mount('#app')
