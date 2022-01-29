const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

const timeNow = new Date();

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'ไม่ว่าวันไหนก็รัก',
            state: 'รักหลายบาทมาแล้ว...',
            assets: {
                large_image: 'laibaht_vtuber',
                large_text: 'Laibaht Vtuber',
            },
            buttons: [
                {
                    'label': 'Laibaht Youtube Channel',
                    'url': 'https://www.youtube.com/c/laibaht',
                },
                {
                    'label': 'Manybaht Music Bot',
                    'url': 'https://bot.manybahtpage.com'
                }
            ],
            timestamps: {
                start: timeNow.getTime()
            },
            instance: true
        },
    });

    console.log('[Manybaht Presence] Started Activity');
});

client.login({ clientId : '936757151597223956' }).catch(console.error);