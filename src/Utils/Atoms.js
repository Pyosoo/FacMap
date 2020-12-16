import {atom} from 'recoil';

export const SubWayApiData = atom({
    key : 'item',
    default : [],
});


export const MyPOS = atom({
    key : 'mypos',
    default : [37.560989, 126.986325],
})