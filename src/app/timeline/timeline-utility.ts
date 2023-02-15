export function experienceFromToInWords(from: Date, to: Date): string {
    const fr = from.toLocaleString('default', { month: 'short' }) + ' ' + from.getFullYear();
    const t = to.toLocaleString('default', { month: 'short' }) + ' ' + to.getFullYear()
    return fr + ' - ' + t;
}

export function totalExperienceInWords(from: Date, to: Date) {
    let experience: string = '';
    const totalTime = (to.getTime() - from.getTime()) / 1000;
    let days = totalTime / (3600 * 24);
    const years = Math.floor(days / 364);

    if(years > 1){
        days = days - years * 365;
        experience = years + ' years';
    }

    else if (years == 1) {
        days = days - years * 365;
        experience = years + ' year';
    }

    const months = Math.floor(days / 30);
    if (months > 1) {
        experience = experience + ' ' + months + ' months'
    }
    else if(months == 1) {
        experience = experience + ' ' + months + ' month'
    }

    return experience;
}