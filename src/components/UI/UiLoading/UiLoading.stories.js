import UiLoading from "./UiLoading";

export default {
    title: 'Ui-Kit/UiVideo',
    component: UiLoading
}

const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: 'light',
    classes: ''
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
}