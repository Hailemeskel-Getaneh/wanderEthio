import React from 'react';
import '../styles/MusicsPage.css';
import HeaderMusic from '../pages/headerMusic';

const Music = () => {
    const musicItems = [
        { id: 1, name: 'Tizita by Mahmoud Ahmed', description: 'A classic Ethiopian song known for its deep emotional expression.', videoId: 'OCfFdUavHNw?si=TotSK9a6I6ArbM5v' },
        { id: 2, name: 'Ethiopia Hagere by Aster Aweke', description: 'A song celebrating Ethiopian culture and heritage.', videoId: 'C2deRtU_5sA?si=K8ddUWkmOXJPk99z' },
        { id: 3, name: 'Ambassel by Mulatu Astatke', description: 'A jazz piece reflecting the unique sound of Ethiopian music.', videoId: 'FAX09zyurlM?si=W-z6mn1sGUMuIl2H' },
        { id: 4, name: 'Bezih Cherka  by Teddy Afro', description: 'A popular contemporary song that resonates with many Ethiopians.', videoId: '_T2ILsxv0L0?si=P5FRKMv9roYHeUt1' },
        { id: 5, name: 'Guramayle by Gigi', description: 'A fusion of traditional Ethiopian music with modern elements.', videoId: 'LQX8xCTJpnQ?si=U3EMu7BykuuRUuGw' },
        { id: 6, name: 'Abet by Jano Band', description: 'A rock song by a well-known Ethiopian band.', videoId: 'DjqCEZO04yc?si=aZxPbXWfud0BR-Y2' },
        { id: 7, name: 'Sew Meseretu by Ephrem Tamiru', description: 'A soulful song that is cherished by many.', videoId: '9V2vVoe9obk?si=Mi6Rlgbxw0-EeaqG' },
        { id: 8, name: 'Hagere by Neway Debebe', description: 'A nostalgic song that reflects on the beauty of Ethiopia.', videoId: '4GkpBGg4g8Y?si=dzgZaFzgqjstnBWg' },
        { id: 9, name: 'Kome Limerkish by Tilahun Gessesse', description: 'A timeless classic by one of Ethiopia\'s legendary singers.', videoId: 'UD0fA2WJdbU?si=0kixJE9gXIpvusn-' },
        { id: 10, name: 'Kunjina by Dawit Melese', description: 'A vibrant and energetic song.', videoId: 'zZYvTerUbnE?si=hR_wkdxK2J94Ha9z' },
        { id: 11, name: 'endegna by Selamawit Gemede', description: 'A modern love song that has gained much popularity.', videoId: '01z3JAOV6LY?si=oBxvuK2rArFhn8gy' },
        { id: 12, name: 'Kiyaye Elias Teshome', description: 'A beautiful song that highlights Ethiopian melodies.', videoId: '5CT5SW1VCVc?si=2oi7TV83LXzcldj2' }
    ];

    return (
        <div>
            <HeaderMusic/>
            <div className="music-container">
                <h2>Music of Ethiopia</h2>
                <div className="youtube-videos">
                    {musicItems.map(item => (
                        <div className="youtube-video" key={item.id}>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.videoId}`}
                                title={item.name}
                                allowFullScreen
                            ></iframe>
                            <div className="video-description">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='tempofooter'></div>
        </div>
    );
}

export default Music;
