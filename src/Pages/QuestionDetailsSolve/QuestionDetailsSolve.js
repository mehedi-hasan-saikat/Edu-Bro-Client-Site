import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import QuestionSolveCart from './QuestionSolveCart';

const QuestionDetailsSolve = () => {
    const { user } = useFirebase()
    const { id } = useParams()
    const [question, setQuestion] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const [QuestionSolves, setQuestionSolves] = useState([])
    console.log('solve', QuestionSolves)

    let googleId = question?.driveLink?.slice(32, 65);

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`




    const onSubmit = data => {
        data.questionId = id
        data.userName = user.displayName
        data.email = user.email
        data.subject = question.subject
        data.year = question.year
        data.code = question.code
        data.department = question.department

        // post solve 

        fetch(`http://localhost:5000/addQuestionSolve`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('order confirmed')
                reset()
            });

    };


    // get question 

    useEffect(() => {
        fetch(`http://localhost:5000/question/${id}`)
            .then(res => res.json())
            .then(data => {
                setQuestion(data)

            })
    }, [id, reset])



    // get solve 
    useEffect(() => {
        fetch(`http://localhost:5000/questionSolve/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setQuestionSolves(data)
            });
    }, [id, reset]);



    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card custom-cart h-100 hover">
                            <iframe title="question" src={viewUrl}
                                className="img-fluid rounded-start w-100 " style={{ height: "300px" }} allow="autoplay"></iframe>
                            <div className="card-body">
                                <h4 className="card-title mb-3">Question Title will be here</h4>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject: {question?.subject}</h5>
                                    <h5 className="card-title">Department: {question?.department}</h5>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject Code: {question?.code}</h5>
                                    <h5 className="card-text ">Year: {question?.year}</h5>
                                </div>
                                <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-capitalize mb-4'>Give your answer here</h2>
                        <div className="login-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className='w-75 mb-3'  {...register("solveNumber", { required: true })} placeholder='Solve Number' /> <br />
                                <input className='w-75 mb-3' {...register("solveDriveLink", { required: true })} placeholder='Question Link' /> <br />
                                <button type='submit'>Post Answer</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center mt-5 fs-1 mb-4'>All the Answers are Below here</h3>
                    </div>
                </div>
                <div className="container text-black mt-5 mb-5" >

                    {QuestionSolves.length ? <div className="row row-cols-1 row-cols-md-3 g-4">
                        {QuestionSolves?.map((QuestionSolve) => (
                            <QuestionSolveCart
                                key={QuestionSolve.id}
                                data={QuestionSolve}>

                            </QuestionSolveCart>
                        ))}
                    </div> : <div><h5>Loading...</h5></div>}

                </div>
            </div>
        </div>
    );
};

export default QuestionDetailsSolve;