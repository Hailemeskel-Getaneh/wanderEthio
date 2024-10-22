import React from 'react';
import '../styles/FilmsPage.css';
import HeaderFilms from './headerFilms';

const Films = () => {
    const filmItems = [
        { id: 1, name: 'Difret', description: 'A film based on a true story of a young Ethiopian girl who challenges the tradition of abduction into marriage.', videoId: 'kcKHRSEp2Wg?si=dKJSrq58vHnOg8Yh' },
        { id: 2, name: 'Lamb', description: 'The story of an Ethiopian boy who becomes attached to a lamb that he is supposed to sacrifice.', videoId: 'a1GZnoIew9A?si=OrPgs5tPHXI7OuJ6' },
        { id: 3, name: 'Teza', description: 'Follows the life of a young intellectual who returns to Ethiopia from Germany during the Derg regime.', videoId: 'YVQTSEdNDG8?si=BVfwhLRcuhAvNXkj' },
        { id: 4, name: 'Harvest: 3,000 Years', description: 'A documentary exploring the lives of peasant farmers in the Ethiopian highlands.', videoId: 'mqSgaueyjo0?si=gGOVRiuLd-4IptYe' },
        { id: 5, name: 'Price of Love', description: 'Tells the story of a taxi driver in Addis Ababa whose life is changed by a prostitute.', videoId: 'fmLEpaG9JBU?si=gfgL3o9E6F2Gasmh' },
        { id: 6, name: 'Crumbs', description: 'Post-apocalyptic Ethiopian love story set against the backdrop of an abandoned spaceship.', videoId: 'r_h5ilmWNek?si=ceFowkuqKIQrEBUE' },
        { id: 7, name: 'The Athlete (Atletu)', description: 'A biographical film about the Ethiopian marathon runner Abebe Bikila, who won two Olympic gold medals barefoot.', videoId: 'qFeZLynH1Ek?si=fMIiLRBaeX7BQU_S' },
        { id: 8, name: 'The Other Side (Yewededu Semon)', description: 'A drama that explores the lives of Ethiopian immigrants in the United States.', videoId: 'Kdo27YBUVCA?si=zdnyL3WnGBHHZPmD' },
        { id: 9, name: 'Sost Maezen (Three Seasons)', description: 'A tale of three women living in Addis Ababa whose lives intersect in unexpected ways.', videoId: 'HpIPbHo3iGY?si=WVFgNIMLo7QFKCsC' },
        { id: 10, name: 'Horizon Beautiful', description: 'A story about a young Ethiopian boy who dreams of becoming a football star and an old Swiss man who is looking for meaning in life.', videoId: 'Ma0c3pYt6Lo?si=33iYfzxn30JZecgs' },
        { id: 11, name: 'Triangle: Going to America', description: 'A comedy about three Ethiopian friends who take a road trip to attend a wedding in America.', videoId: 'r9115_C_YQg?si=BcUU2NpohyZjMzMy' },
        { id: 12, name: 'The Garden of Words', description: 'A romance drama set in Addis Ababa about a young woman who falls in love with a married man.', videoId: 'vQqLsBePFPQ?si=RjYhCBLICPa8EdS5' }
    ];

    return (

        <div>
            <HeaderFilms/>
             <div className="films-container">
            <h2>Films of Ethiopia</h2>
            <div className="youtube-videos">
                {filmItems.map(item => (
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
            <div className='tempofooter'></div>
        </div>
        </div>
       
    );
}

export default Films;
