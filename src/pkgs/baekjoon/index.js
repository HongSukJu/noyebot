const Package = require('../../libs/Package')
const main = require('./main')

const helpSimple = [
    '1. 크롤링 리스트에 단체를 등록합니다.',
    '2. 알림 받을 아이디를 등록합니다.',
    '단체 ID는 `랭킹>학교/회사>[단체]`로 들어간 후 URL 맨 뒤 숫자입니다.',
    '`@bj init <?id>` 크롤링 리스트에 단체를 등록합니다. 또한 이 메시지를 보낸 채널로 알림을 받습니다.',
    '`@bj add <id>` 알림 받을 유저를 등록합니다.',
    '`@bj users` 등록된 유저의 목록를 봅니다.',
    '`@bj user <id>` 유저의 정보를 봅니다.',
    '`@bj <problem>` or `@bj prob <problem>` 문제의 정보를 봅니다.'   
]

const package = new Package(
    {'bj': main},
    '백준',
    '백준 알림 & 문제 정보',
    helpSimple,
    helpSimple
)

module.exports = package