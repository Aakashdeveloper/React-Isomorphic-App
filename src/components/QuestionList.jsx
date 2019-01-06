import React from 'react';
import TagsList from './TagsList'
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom'

/**
 * Each entry in the QuestionList is represtented by a QuestionListItem, which displays high-level information
 * about a question in a format that works well in a list
 */
const imageSize = {
    width:'140px'
}

const QuestionListItem = ({tags,answer_count,title,views,question_id, owner})=>(
    <div className="mb-3">
        <div className="media border p-3">
        <img src={owner.profile_image}
            style={imageSize}
            className="mr-3 mt-3 rounded-circle gravtar"/>
            <div className="media-body">

                <h4>{owner.display_name} asked: <small><i> {title}</i></small></h4>
                <div className="mb-2 mt-2">
                    <TagsList tags={tags}/>
                    <br/>
                    <div>
                        <Link to={`/questions/${question_id}`}>
                            <button className="btn btn-primary">More Info</button>
                        </Link>
                    </div>
                </div>  
            </div>
        
        </div>


        
    </div>);

/**
 * Display all questions in an array provided to it as a simple list
 */
const QuestionList = ({questions})=>(
    <div>
        { questions ?
            <div>
                {questions.map(question=><QuestionListItem key={question.question_id} {...question}/>)}
            </div> :
            <div>
                Loading questions...
            </div>
        }
    </div>
);

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
const mapStateToProps = ({questions})=>({
    questions
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(QuestionList);