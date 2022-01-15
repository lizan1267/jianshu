import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>优秀的人不抱怨</Header>
                <Content>
                    <img src="https://upload-images.jianshu.io/upload_images/13302410-9329a7c621d18abf.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp" alt="" />
                    <p>在国家双减政策下，俞敏洪的公司干不下去了，俞敏洪把八万套课桌都捐给了山村小学，加上运费差不多一个亿。许多人都在夸俞敏洪是条汉子，慷慨大方，而我却觉得这样夸他未免有些肤浅了。</p>
                    <p>记得有个小故事，说的是清朝末年，天津有位武术名家，一条大辫子使得跟软鞭子似的出神入化，打遍天津无敌手。可是，辛亥年以后不让留辫子了。这怎么办呢？神辫子销声匿迹了三年后复出了，仇家听说他复出了就来找他寻仇。神辫子顶着一颗大光头，不慌不忙的从地上抓起一把石子往天上一扔，然后迅速拿出一把手枪，啪啪啪，枪响之后所有石子都被打得稀碎。神辫子改神枪了！</p>
                    <p>看懂了吗？在大势面前，人是不能硬扛的；跳脚骂街满腹牢骚推卸责任都没用。</p>
                    <p>俞敏洪也是同样的智慧，不但不扛大势，不怨天尤人，而且还要做好事。既博得了群众的赞美，也赢得了政府的青睐。如今的俞敏洪带领着老师们进军直播带货，又闯出了一条新路子。</p>
                    <p>人生路很长，我们会遇到一个又一个的俞敏洪时刻。女朋友要分手了，被老板炒鱿鱼了，做生意失败了，岗位竞争失利了……扛住！尽可能用漂亮的姿势去输，然后再赢回来就是了！</p>
                </Content>
            </DetailWrapper>
        )
    }
}
export default Detail;
