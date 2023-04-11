
const intervals = [
    { label: 'rok', seconds: 31536000 },
    { label: 'mesiac', seconds: 2592000 },
    { label: 'dň', seconds: 86400 },
    { label: 'hodin', seconds: 3600 },
    { label: 'minút', seconds: 60 },
    { label: 'sekund', seconds: 1 }
];

export const timeSince = (param : any) => {
    const date = (param instanceof Date) ? param : new Date(param);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    if(interval !== undefined ){
        const count = Math.floor(seconds / interval.seconds);
        if( 2592000 > interval.seconds) {
            return `Uverejené pred ${count} ${interval.label}${count !== 1 ? 'ami' : 'ou'} `;
        }else{
            return `Uverejnené ${new Intl.DateTimeFormat('de-DE').format(date)}`
        }
    }
    else{
        return `Čas uverejnenia je neznámy`
    }
}