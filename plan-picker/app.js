let PlanItemComponent =  {
    template: "#plan-template",
    props: {
        name: {type: String, required: true},
        selected: {type: Boolean, default: false}
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
}

let PlanPickerItemComponent = {
    components: {'plan-item': PlanItemComponent},
    template: "#plan-picker-item-template",
    data() {
        return {
            plans: ["The Single", "The Curious", "The Addict"],
            selectedPlan: null,
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    }
}

Vue.createApp({
    components: {PlanPickerItem: PlanPickerItemComponent}
})
    .mount('#app')
