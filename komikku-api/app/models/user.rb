class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, :first_name, :last_name, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token!

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        generate_unique_session_token
        self.save!
        self.session_token
    end

    private

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

    def ensure_session_token!
        generate_unique_session_token unless self.session_token
    end
end
