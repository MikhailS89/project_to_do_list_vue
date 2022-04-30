const App = {
    data() {
        return {
            placeholder: 'Введите текст',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote(){
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        },
        toUpperCase(item) {
            return item.toUpperCase()
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }

}
Vue.createApp(App).mount('#note')