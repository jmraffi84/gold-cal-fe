import React, { useState } from 'react';
import { goldApi } from '../Api/goldApi';
import { Button } from 'react-bootstrap';
import './main.css'

const GoldRateCalculator = () => {
    const [formData, setFormData] = useState({
        weight: '',
        purity: '',
        actualGoldPrice: '',
        gstRate: '',
        wastageCost: '',
        makingCharges: '',
    });
    const [calculatedRate, setCalculatedRate] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCalculate = async (e) => {
        e.preventDefault();
        try {
            const rate = await goldApi(formData);
            setCalculatedRate(rate);
        } catch (error) {
            setCalculatedRate('Error calculating gold rate.');
        }
    };

    return (
        <>
            <div className="container mt-5 mb-5 ">
                <h2>Gold Rate Calculator</h2>
            </div>

            <form onSubmit={handleCalculate} className="container mt-5 mr-auto shadow">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="actualGoldPrice" className="mr-auto">Today Gold Price</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.actualGoldPrice}
                                placeholder="40000"
                                onChange={handleChange}
                                name="actualGoldPrice"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="weight" className="mr-auto">Weight in gms</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.weight}
                                placeholder="2"
                                onChange={handleChange}
                                name="weight"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="purity" className="mr-auto">Purity</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.purity}
                                placeholder="18/22"
                                onChange={handleChange}
                                name="purity"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="gstRate" className="mr-auto">Gst in %</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.gstRate}
                                placeholder="0.03"
                                onChange={handleChange}
                                name="gstRate"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="wastageCost" className="mr-auto">Wastage in %</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.wastageCost}
                                placeholder="0.05"
                                onChange={handleChange}
                                name="wastageCost"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="form-group">
                            <label htmlFor="makingCharges" className="mr-auto">Making Charges</label>
                            <input
                                type="number"
                                className="form-control"
                                value={formData.makingCharges}
                                placeholder="0.05"
                                onChange={handleChange}
                                name="makingCharges"
                            />
                        </div>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="col-12">
                        <Button className='container' variant="primary" type="submit">
                            Calculate
                        </Button>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12">
                        <p className="h5 bg-light text-dark">Calculated Rate: {calculatedRate}</p>
                    </div>
                </div>
            </form>
        </>

    );
};

export default GoldRateCalculator;
