import React from "react";

const ProgressLineChart = (props) => {
    const { progressName } = props;

    return (
        <>
            {progressName.map((progress) => {
                return <div className={progress} />
            })}
        </>
    )
}

export default ProgressLineChart