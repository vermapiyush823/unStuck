import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "./AnswerCard";
import NoResult from "./NoResult";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}
const AnswerTab = async ({ searchProps, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
    page: 1,
  });

  return (
    <>
      {result.answers.length > 0 ? (
        result.answers.map((answer: any) => (
          <AnswerCard
            key={answer._id}
            _id={answer._id}
            clerkId={clerkId}
            question={answer.question}
            author={answer.author}
            upvotes={answer.upvotes.length}
            createdAt={answer.createdAt}
          />
        ))
      ) : (
        <NoResult
          title="There's no saved questions to show"
          description="Be the first one to break the silence! 🚀 Ask a question and kickstart the dicussion. Our query could be the next big thing others learn from."
          link="/ask-question"
          LinkTitle="Ask a Question"
        />
      )}
    </>
  );
};

export default AnswerTab;
