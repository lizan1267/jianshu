import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, TopicAnother } from '../style';

class Topic extends Component {
    render() {
        const { list }=this.props;
        return (
            <TopicWrapper>
                {
                    list.map(item=>{
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" alt="" src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <TopicAnother>
                    更多热门专题 &gt;
                </TopicAnother>
            </TopicWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','topicList'])
});


export default connect(mapState,null)(Topic);
