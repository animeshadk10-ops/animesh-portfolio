from playwright.sync_api import sync_playwright, expect
import time

def verify_portfolio():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        try:
            print("Connecting to dev server...")
            page.goto("http://localhost:5173", wait_until="networkidle")

            print("Capturing Hero section...")
            page.screenshot(path="/home/jules/verification/hero_section.png")

            print("Scrolling to About...")
            page.click('a[href="#about"]')
            time.sleep(1)
            page.screenshot(path="/home/jules/verification/about_section.png")

            print("Testing Contact Form...")
            page.fill('input[name="name"]', 'Test User')
            page.fill('input[name="email"]', 'test@example.com')
            page.fill('textarea[name="message"]', 'Hello, this is a test message.')
            page.click('button[type="submit"]')

            # Wait for success message
            success_msg = page.get_by_text("Packet Received")
            expect(success_msg).to_be_visible(timeout=5000)
            page.screenshot(path="/home/jules/verification/contact_success.png")

            print("Verification complete.")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_portfolio()
