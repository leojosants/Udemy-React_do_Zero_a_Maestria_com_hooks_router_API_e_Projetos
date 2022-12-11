// 

const TemplateExpressions = () => {
    
    const name = 'Leonardo';

    const data = {
        age: 38,
        job: 'Técnico em Enfermagem',
    };
    
    return(
        <div>
            <h1>Olá { name } e tenho { data.age } anos.</h1>
            <p>Atualmente sou {data.job}</p>
            <p>{ 4 + 4 }</p>
            <p>{ console.log('teste') }</p>

        </div>
    );
}

export default TemplateExpressions;