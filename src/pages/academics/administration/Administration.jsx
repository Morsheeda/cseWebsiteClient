import React from 'react'
import "./Administration.css"

export default function Administration() {
    return <div className="administration">
        <h4 className='admistrationSourceTitle'>Board Of Trustees</h4>
        <div className="administrationSource boardOfTrustees">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/board-of-trustees" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Syndicate Members</h4>
        <div className="administrationSource syndicate">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/syndicate" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Academic Council</h4>
        <div className="administrationSource academicCouncil">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/academic" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Executive Committees</h4>
        <div className="administrationSource executiveCommittees">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/executive-committee" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Finance Committee</h4>
        <div className="administrationSource financeCommittee">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/finance-committee" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Development Committee</h4>
        <div className="administrationSource developmentCommittee">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/development-committee" width="100%" height="533" frameborder="0"></iframe>
        </div>
        <h4 className='admistrationSourceTitle'>Disciplinary Committee</h4>
        <div className="administrationSource disciplinaryCommittee">
            <iframe scrolling='no' src="https://www.feniuniversity.ac.bd/committee/disciplinary-committee" width="100%" height="533" frameborder="0"></iframe>
        </div>
    </div>
}
