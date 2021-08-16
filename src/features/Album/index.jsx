import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Những Bản Hit 'Chậm Mà Chắc'!",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/0/1/5/a0150a1805d78013821afbf3b0df570d.jpg",
        },
        {
            id: 2,
            name: "Thêm Một Ai Cũng Dư Thừa",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/0/d/4/c0d4b2070c9dcbc4495610cb852462e7.jpg",
        },
        {
            id: 3,
            name: "Thay Lời Muốn Nói: Một Nhà",
            thumbnailUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/a/7/c/6a7c599602c7989809b2d3464a4c1ca1.jpg",
        },
    ]
    
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;