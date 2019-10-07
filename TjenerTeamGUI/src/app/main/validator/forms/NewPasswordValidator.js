export const NewPasswordValidator =
[
    {
        field: 'oldPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Mangler at udfylde felt'
    },
    {
        field: 'newPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Mangler at udfylde felt'
    },
    {
        field: 'confirmPassword',
        method: 'isEmpty',
        validWhen: false,
        message: 'Mangler at udfylde felt'
    },
    {
        field: 'confirmPassword',
        method: (confirmation, state) => (state.newPassword === confirmation),
        validWhen: true,
        message: 'Kodeordene stemmer ikke overens'
    },
];
