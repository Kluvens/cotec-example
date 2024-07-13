import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qa = () => {
  return (
    <div className="flex shrink-0 grow basis-auto justify-center px-5 sm:px-10">
      <div className="w-96">
        <div className="mb-5">
          <div
            id="collection-icon-3742473"
            className="flex items-center rounded-card bg-cover stroke-collection-card-color text-collection-card-color justify-start"
            data-testid="collection-photo"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10">
              <img
                src="https://intercom.help/openai/assets/svg/icon:people-chat-gets-chat-bubble-left-ellipsis/0E0E1A"
                alt=""
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="mb-1 font-primary text-2xl font-bold leading-10 text-body-primary-color">
            ChatGPT
          </header>
          <div className="text-md font-normal leading-normal text-body-primary-color">
            <p>All things about ChatGPT</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex">
            <span className="line-clamp-1 flex text-base text-body-secondary-color">
              186 articles
            </span>
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is ChatGPT?</AccordionTrigger>
              <AccordionContent>
                ChatGPT is an AI language model developed by OpenAI that can generate human-like text based on the input it receives. It is used for various applications, including answering questions, creating content, and engaging in conversation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much does it cost to use ChatGPT?</AccordionTrigger>
              <AccordionContent>
                The cost to use ChatGPT varies, with a free tier available and a ChatGPT Plus subscription costing $20 per month, while API usage is priced based on the number of tokens processed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why does the AI seem so real and lifelike?</AccordionTrigger>
              <AccordionContent>
                These models were trained on vast amounts of data from the internet written by humans, including conversations, so the responses it provides may sound human-like. It is important to keep in mind that this is a direct result of the system's design (i.e. maximizing the similarity between outputs and the dataset the models were trained on) and that such outputs may be inaccurate, untruthful, and otherwise misleading at times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I trust that the AI is telling me the truth?</AccordionTrigger>
              <AccordionContent>
                ChatGPT is not connected to the internet, and it can occasionally produce incorrect answers. It has limited knowledge of world and events after 2021 and may also occasionally produce harmful instructions or biased content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What is TypeScript?</AccordionTrigger>
              <AccordionContent>
                TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static types, allowing developers to catch errors earlier and write more robust and maintainable code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
              <AccordionContent>
                Tailwind CSS is a utility-first CSS framework that provides a set of predefined classes to help developers design and build responsive, customizable user interfaces quickly and efficiently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>What is Shadcn UI?</AccordionTrigger>
              <AccordionContent>
                ShadCN UI is a user interface component library built for modern web development, offering a collection of pre-designed, customizable UI components to help developers quickly create visually appealing and responsive web applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>What is Framer Motion?</AccordionTrigger>
              <AccordionContent>
                Framer Motion is a popular open-source library for React that provides a simple and powerful API for creating animations and gestures, allowing developers to add smooth, interactive animations to their web applications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>What is the purpose of this cloned website?</AccordionTrigger>
              <AccordionContent>
                As a developer, I am using this website for practicing purpose only. I use this project to demonstrate that I can develop website applications, not for commercial purposes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default qa;
