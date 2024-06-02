"use client";
import React from "react";
import useScreenHeight from "../customeHooks/useScreenHeight";

export default function page() {
  const screenHeight = useScreenHeight();
  return (
    <>
      <title>Grammar Tips - The Word Counter</title>
      <div
        className="w-[95%] md:w-[85%] xl:w-[79%] mx-auto pb-[50px]"
        style={{ minHeight: `${screenHeight - 300}px` }}
      >
        <section class="bg-white bd1">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <h1 class="mb-8 text-[30px] lg:text-[35px] font-bold tracking-tight font-extrabold  ">
              Grammar Tips
            </h1>

            <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16  md:grid-cols-2">
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                    1. Subject-Verb Agreement :
                  </h3>
                  <p class="text-gray-900 ">
                    Ensure that the subject and verb in a sentence agree in
                    number (singular or plural). For example, "He plays" (not
                    "He play") and "They go" (not "They goes").
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    2. Punctuation :
                  </h3>
                  <p class="text-gray-900 ">
                    Use appropriate punctuation marks to convey meaning clearly.
                    Pay attention to commas, periods, question marks,
                    exclamation marks, colons, and semicolons.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    3. Avoid Run-on Sentences :
                  </h3>
                  <p class="text-gray-900 ">
                    Separate independent clauses with proper punctuation or
                    conjunctions to avoid run-on sentences.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    4. Use Active Voice :
                  </h3>
                  <p class="text-gray-900 ">
                    Whenever possible, use the active voice in your sentences.
                    It makes your writing more direct and engaging.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    5. Watch for Misplaced Modifiers :
                  </h3>
                  <p class="text-gray-900 ">
                    Make sure that descriptive words or phrases are placed close
                    to the words they modify to avoid confusion.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    6. Proper Pronoun Usage :
                  </h3>
                  <p class="text-gray-900 ">
                    Use pronouns correctly, matching the gender and number of
                    the nouns they replace. Avoid vague pronoun references.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    7. Consistent Tense :
                  </h3>
                  <p class="text-gray-900 ">
                    Stick to one tense throughout a piece of writing unless
                    there's a clear reason to switch.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    8. Apostrophes :
                  </h3>
                  <p class="text-gray-900 ">
                    MUse apostrophes correctly for contractions (e.g., can't,
                    don't) and to indicate possession (e.g., John's book).
                  </p>
                </div>
              </div>
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    9. Homophones :
                  </h3>
                  <p class="text-gray-900 ">
                    Be mindful of homophones (words that sound the same but have
                    different meanings), such as "their," "they're," and
                    "there."
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    10. Sentence Fragments :
                  </h3>
                  <p class="text-gray-900 ">
                    Avoid sentence fragments and ensure that each sentence has a
                    subject and a verb.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    11. Capitalization :
                  </h3>
                  <p class="text-gray-900 ">
                    Use capital letters appropriately for proper nouns, the
                    beginning of sentences, and important titles.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    12. Parallel Structure
                  </h3>
                  <p class="text-gray-900 ">
                    Keep items in a list or series in the same grammatical form
                    for clarity and consistency.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    13. Double Negatives :
                  </h3>
                  <p class="text-gray-900 ">
                    Avoid using double negatives (e.g., "I don't have nothing")
                    as they can create confusion.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    14. Commas in Lists :
                  </h3>
                  <p class="text-gray-900 ">
                    Use commas to separate items in a list (e.g., apples,
                    bananas, and oranges).
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                    15. Quotation Marks :
                  </h3>
                  <p class="text-gray-900 ">
                    Use quotation marks to indicate direct speech or when
                    referencing titles of short works like articles or poems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="px-10 pb-10 text-[blue]">
            * Remember, the writing skill is improves with make a practice. Keep
            these tips in your mind while writing and proofread your work to
            catch any errors before finalizing it. Happy writing to word editor!
          </p>
        </section>
      </div>
    </>
  );
}
