import { AccordionDetails, Box, Stack, Accordion, AccordionSummary } from "@mui/material"
import { VendorHeader } from "../components/VendorHeader"
import { useState } from "react"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { PageContainer, PageText } from "../../components/UI/UI"
import { FaqAccordianSx, FaqDetailsSx } from "../styles/VendorSx"
import { Expand, Text } from "../styles/styledComponents"

const FAQ = () => {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Faq's" variant="h4" mt="35px" component="div" color="#30AADD" display="flex" width="100%" />

                    <Box textAlign="justify" sx={{ marginTop: { xs: '18%', md: '18%', lg: '8%', xl: '8%' } }} >

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={FaqAccordianSx} >
                            <AccordionSummary
                                expandIcon={<Expand />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Text name="What is Lorem Ipsum" />
                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={FaqAccordianSx}>
                            <AccordionSummary
                                expandIcon={<Expand/>}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Text name="Lorem Ipsum is simply dummy text of the printing and typesetting industry?" />

                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name='"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
                                />
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={FaqAccordianSx}>
                            <AccordionSummary
                                expandIcon={<Expand/>}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Text name="Why do we use it? " />
                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={FaqAccordianSx}>
                            <AccordionSummary
                                expandIcon={<Expand/>}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <Text name="Where does it come from?" />
                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                                />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={FaqAccordianSx}>
                            <AccordionSummary
                                expandIcon={<Expand/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Text name="Where can I get some?" />
                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                                />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={FaqAccordianSx}>
                            <AccordionSummary
                                expandIcon={<Expand/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Text name="Lorem Ipsum is simply dummy text of the printing and typesetting industry?" />
                            </AccordionSummary>
                            <AccordionDetails sx={FaqDetailsSx}>
                                <Text
                                    name="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                                />
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </PageContainer>

            </Stack>

        </Box>
    )
}
export default FAQ