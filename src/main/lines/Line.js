const get3Arrivals = (arrivals) => {
    arrivals.sort((a, b) => {
        const as = a.split(':');
        const bs = b.split(':');
        let ah = parseInt(as[0]);
        if (ah === 0)
            ah = 24;
        const am = parseInt(as[1]);
        let bh = parseInt(bs[0]);
        if (bh === 0)
            bh = 24;
        const bm = parseInt(bs[1]);
        if (ah === bh) {
            return am - bm;
        }
        return ah - bh;
    });
    return arrivals.filter((item) => {
        const time = new Date();
        const hournow = time.getHours();
        const minutenow = time.getMinutes();
        const hourmin = item.split(':');
        let arrivehour = parseInt(hourmin[0]);
        if (arrivehour === 0)
            arrivehour = 24;
        const arrivemin = parseInt(hourmin[1]);
        if (arrivehour === hournow) {
            return arrivemin >= minutenow;
        } else if (arrivehour >= hournow) {
            return true;
        }
        return false;
    });
}

export default get3Arrivals;