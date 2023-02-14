import React from "react";

const Posts = ({ posts, loading }) => {
    const headers = [
        "Delivery_Status",
        "Reciever",
        "Sender",
        "Text",
        "Time",
        "campaign_Name",
        "campaign_Time",
        "campaign_category",
        "campaign_creator",
        "campaign_status",
        "campaign_type",
        "endDateTime",
        "expected_expense",
        "expected_impression",
        "id",
        "masking",
        "message",
        "startDateTime",
        "total_expense",
        "total_impression",
        "content_type",
        "cost",
        "sms_type",
    ];

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className="card" style={{ borderRadius: "0px" }}>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {headers.map((header) => (
                                    <th key={header}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {posts?.map((item, index) => {
                                return (
                                    <tr key={item?.id}>
                                        <td className="py-1">{`${item?.Delivery_Status}`}</td>
                                        <td className="py-1">{`${item?.Reciever}`}</td>
                                        <td className="py-1">{`${item?.Sender}`}</td>
                                        <td className="py-1">{`${item?.Text}`}</td>
                                        <td className="py-1">{`${item?.Time}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_Name}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_Time}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_category}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_creator}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_status}`}</td>
                                        <td className="py-1">{`${item?.campaign.campaign_type}`}</td>
                                        <td className="py-1">{`${item?.endDateTime}`}</td>
                                        <td className="py-1">{`${item?.campaign.expected_expense}`}</td>
                                        <td className="py-1">{`${item?.campaign.expected_impression}`}</td>
                                        <td className="py-1">{`${item?.id}`}</td>
                                        <td className="py-1">{`${item?.campaign.masking}`}</td>
                                        <td className="py-1">{`${item?.campaign.message}`}</td>
                                        <td className="py-1">{`${item?.startDateTime}`}</td>
                                        <td className="py-1">{`${item?.campaign.total_expense}`}</td>
                                        <td className="py-1">{`${item?.campaign.total_impression}`}</td>
                                        <td className="py-1">{`${item?.content_type}`}</td>
                                        <td className="py-1">{`${item?.cost}`}</td>
                                        <td className="py-1">{`${item?.sms_type}`}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Posts;
