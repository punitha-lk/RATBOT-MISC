

describe('Sample',()=>{

   // it('Sample Test', async()=>{


    //     // let appLik= await $('~App');

    //    let appLik= await $('//android.widget.TextView[@text="Graphics"]');
    //    console.log(appLik)
    //    console.log(await appLik.getText());

    //    await appLik.click();

    //    let objByClassName= await $('android.widget.TextView');

    //    console.log(objByClassName);

    //    console.log(await objByClassName.getText());


    //    await browser.pause(3000);

   // });

        // it('Few Clicks', async()=>{

        //     let appLink= await $('~App');
        //     await appLink.click();

        //     await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        //     await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        //     await $('//android.widget.TextView[@text="Command two"]').click();
            
        //     await browser.pause(3000);



        // });
         it('Accessibility',async()=>{

            // await $('//android.widget.TextView[@content-desc="Accessibility"]').click();

            // await $('//android.widget.TextView[@content-desc="Custom View"]').click();

            await driver.back();

         })
         

     });
