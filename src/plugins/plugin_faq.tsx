import levenshtein from 'fast-levenshtein';



export default function FAQWorkflow(question: any, faqs: any) {
    const answer = findFAQMatch(question, faqs);
    if (answer) {
        return answer;
    }
}


function getSimilarityScore(source: string, target: string) {
    const length = Math.max(source.length, target.length);
    const distance = levenshtein.get(source.toLowerCase(), target.toLowerCase());
    return (1 - distance / length) * 100; // Returns percentage similarity
}

function findFAQMatch(question: string, faqs: any, threshold = 80) {
    for (const faq of faqs) {
        const score = getSimilarityScore(question, faq.question);
        if (score >= threshold) {
            return faq.answer; // Return the answer if similarity is above the threshold
        }
        else{
            console.log("FAQWorkflow found nothing.");
        }
    }
    return null; // No suitable FAQ found
}