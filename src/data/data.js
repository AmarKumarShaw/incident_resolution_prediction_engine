export const data = [
    {
      "Short_Description": "Duplicate accounts", 
      "Close_Notes": "Issue: Duplicate accounts\nAnalysis/Resolution: Duplicate outbound cases were created  when the call list ran. Manually cancelled the duplicate cases. Hence, going ahead and closing the incident.", 
      "Number": "INC2226852", 
      "Subcategory": "Salesforce ICEP", 
      "Resolve_Code": "Interface Issue"
    }, 
    {
      "Short_Description": "Salesforce Account is duplicated ", 
      "Close_Notes": "Issue:Salesforce Account is duplicated \nAnalysis/Resolution:We have an existing incident with the same issue (INC2343748) .We will follow up with the same on that incident as confirmed by @Justin Tempelmeier.\n\nHence, we will be going ahead and closing the incident.", 
      "Number": "INC2344354", 
      "Subcategory": "Retail Execution", 
      "Resolve_Code": "Duplicate Incident"
    }, 
    {
      "Short_Description": "I have two accounts that keep duplicating tickets when any work or edits are done to the work orders or service appointments", 
      "Close_Notes": "Issue: Work order and Service Appointments are being duplicated", 
      "Number": "INC2438989", 
      "Subcategory": "CRM and Contact Center", 
      "Resolve_Code": "Functional Configuration"
    }, 
    {
      "Short_Description": "Error in account causing duplication of cases/Service appointments account 0501230040", 
      "Close_Notes": "Issue: A duplicate work order was creating whenever we update case\nAnalysis: We see that sales group key data is missing in account which was causing the  failure for generating service notification number as there was no service notification number every time a case is triggered based on conditions it will create a new work order\nResolution: We have requested user to add sales group key and as there is no response from user we will be closing the incident", 
      "Number": "INC2468587", 
      "Subcategory": "Workflow", 
      "Resolve_Code": "Data synchronization Issue"
    }, 
    {
      "Short_Description": "There are multiple accounts showing up on my tac plan that I have already visited.", 
      "Close_Notes": "Issue  : There are multiple accounts showing up on my tac plan that I have already visited.\nAnalysis / Resolution : \nThe first visit was created right on the day when the operating hour day was changed with the difference of few minutes hence the first visit \"00184565\" still carries the reference of the previous operating hour day. \n\nAs this is a no issue let us know if we can go ahead and close the incident.", 
      "Number": "INC2290368", 
      "Subcategory": "Merch360", 
      "Resolve_Code": "Interface Issue"
    }, 
    {
      "Short_Description": "Other Bottler's Accounts Showing Up For Consolidated", 
      "Close_Notes": "Issue :  Agents able to see  Account of other bottler when there is a common contact\nAnalysis : There is common contact for 2 accounts from different bottlers\nResolution : Octane user story created to address this issue", 
      "Number": "INC2205782", 
      "Subcategory": "Salesforce ICEP", 
      "Resolve_Code": "Interface Issue"
    }, 
    {
      "Short_Description": "Receiving an error on certain accounts.", 
      "Close_Notes": "Issue: Receiving an error on certain accounts.\nAnalysis:  We have identified the cause of the issue and its linked to one of the batch jobs\nResolution: The fix has been deployed to Production and issue has been resovled. Hence, closing the incident with User's confirmation.", 
      "Number": "INC2286124", 
      "Subcategory": "Salesforce ICEP", 
      "Resolve_Code": "Interface Issue"
    }, 
    {
      "Short_Description": "As of this morning, all the visits in Salesforce are duplicated. It shows I have 22 visits for today, which I should actually only have about 11. The same thing is happening to my co-workers.", 
      "Close_Notes": "Issue : As of this morning, all the visits in Salesforce are duplicated. It shows I have 22 visits for today, which I should actually only have about 11. The same thing is happening to my co-workers.\nAnalysis  / Resolution : We have an existing Problem ticket PRB0068529 for this issue. Hence, we'll be attaching this incident to the Problem ticket and will be closing the incident.\nThe changes are already moved to LFLN001, we are planning to move the changes to production on next week. \nWorkaround please skip the duplicate visits. Please do let us know in case of any concerns.", 
      "Number": "INC2379394", 
      "Subcategory": "Retail Execution", 
      "Resolve_Code": "Converted to Problem Ticket"
    }, 
    {
      "Short_Description": "Visits are getting duplicated and repeated in salesforce 360 on the visits tab.", 
      "Close_Notes": "Issue : Visits are getting duplicated and repeated in salesforce 360 on the visits tab.\nAnalysis/ Resolution :  We have created the problem ticket on this issue for permanent fix : PRB0067583, hence we are going ahead and closing the Incident. Please let us know if in case of any issues.\n\nWorkaround :  Please follow the PPT as attached.", 
      "Number": "INC2296735", 
      "Subcategory": "Salesforce ICEP", 
      "Resolve_Code": "Converted to Problem Ticket"
    }, 
    {
      "Short_Description": "Error when submitting Sales order Multiple Accounts", 
      "Close_Notes": "Issue: Error when submitting Sales order Multiple Accounts.\nAnalysis: The error is occurring due to the lock post the batch job process.\nresolution: We have linked this incident to a PRB0067398 and the fix for the same has already been deployed to PROD. Hence, closing the incident.", 
      "Number": "INC2284552", 
      "Subcategory": "Salesforce ICEP", 
      "Resolve_Code": "Converted to Problem Ticket"
    }
  ]