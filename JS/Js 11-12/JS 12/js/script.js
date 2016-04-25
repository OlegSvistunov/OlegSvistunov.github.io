$(function () {

    var html = $('#myProfile').html();

    var profileData = [
        {
            profileName: 'Иванов Иван Иванович',
            profileImg: 'img/user.jpg',
            profileText: 'Студент заборостроительного университета',
            profileFrontQuestion: 'Хочу учить фронтенд, потому что:',
            profileFrontAnswer: [
                'Заборы строить не интересно', 'Платят мало', 'Приходится работать по ночам'
            ],
            profilePhoneTitle: 'Мой контактный телефон',
            profilePhone: '+38022222222 ',
            profileVkTitle: 'Мой профиль вконтакте',
            profileVK: 'http://vk.com',
            profileFeedbackTitle: 'Мой фидбек: ',
            profileFeedback: 'Если нужно, могу построить вам забор'

        }
    ];

    var content = tmpl(html, {
        data: profileData
    });

    $('body').append(content);
});
